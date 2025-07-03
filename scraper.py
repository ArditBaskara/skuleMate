import requests
from bs4 import BeautifulSoup
from models import Beasiswa, Info, db
import uuid
import os
import csv

def get_beasiswa_deskripsi(url):
    headers = {'User-Agent': 'Mozilla/5.0'}
    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        return "Deskripsi tidak dapat diambil"

    soup = BeautifulSoup(response.text, 'html.parser')
    content_div = soup.find('div', class_='entry-content')
    if not content_div:
        return "Deskripsi tidak ditemukan"

    first_p = content_div.find('p')
    return first_p.get_text(strip=True) if first_p else "Deskripsi tidak tersedia"

def ambil_beasiswa_json():
    headers = {'User-Agent': 'Mozilla/5.0'}
    hasil = []

    # Ambil page_count dari DB
    info = Info.query.first()
    if not info:
        info = Info(page_count=1)
        db.session.add(info)
        db.session.commit()

    start = info.page_count
    end = start + 5

    for page in range(start, end):
        url = f'https://beasiswa.id/category/beasiswa/beasiswa-sarjana/page/{page}'
        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            continue

        soup = BeautifulSoup(response.text, 'html.parser')
        beasiswas = soup.find_all('div', class_='post-content')

        for beasiswa in beasiswas:
            title_tag = beasiswa.find('h2', class_='entry-title')
            if title_tag and title_tag.a:
                title = title_tag.a.text.strip()
                link = title_tag.a['href']
                deskripsi = get_beasiswa_deskripsi(link)

                new_entry = Beasiswa(
                    beasiswa_id=uuid.uuid4(),
                    title=title,
                    description=deskripsi
                )
                db.session.add(new_entry)

    # Simpan dan update page_count
    info.page_count = end
    db.session.commit()
    
def save_to_csv(data, path):
    csv_file = path
    
    os.makedirs(os.path.dirname(csv_file), exist_ok=True)
    
    header = ['title', 'desc', 'link']
    
    file_exists = os.path.isfile(csv_file)
    
    with open(csv_file, mode='a', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        
        if not file_exists:
            writer.writerow(header)
        
        for entry in data:
            writer.writerow([entry['title'], entry['desc'], entry['link']])
    
def ambil_beasiswa_json_csv():
    headers = {'User-Agent': 'Mozilla/5.0'}
    hasil = []

    start = 1
    end = start + 5

    for page in range(start, end):
        url = f'https://beasiswa.id/category/beasiswa/beasiswa-sarjana/page/{page}'
        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            continue

        soup = BeautifulSoup(response.text, 'html.parser')
        beasiswas = soup.find_all('div', class_='post-content')

        for beasiswa in beasiswas:
            title_tag = beasiswa.find('h2', class_='entry-title')
            if title_tag and title_tag.a:
                title = title_tag.a.text.strip()
                link = title_tag.a['href']
                deskripsi = get_beasiswa_deskripsi(link)

                hasil.append({
                    'title': title,
                    'desc': deskripsi,
                    'link': link
                })

    save_to_csv(hasil, '/content/drive/MyDrive/bea_cukai/scheduling/beasiswa/database_beasiswa.csv')
    print(f"Data beasiswa berhasil disimpan ke CSV!")
