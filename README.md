# 🎓 SkuleMate — AI-Powered Scholarship Finder

**SkuleMate** is an intelligent scholarship search platform designed to simplify and personalize the way users find scholarships. Powered by **Natural Language Processing** and **custom-trained AI models**, SkuleMate analyzes your profile or CV and matches it with thousands of curated scholarships using **semantic similarity** — no more manual searching.

> 🧠 Just upload your CV or write a short bio. Let the AI find your best-fit scholarships.

<img src="public/img_1.png" alt="Nutriject Homepage" width="100%"/>

---

## 🚀 Key Features

- 🤖 **AI-Powered Matching**: Automatically matches your profile with scholarship descriptions using sentence embedding techniques.
- 📄 **CV or Text Input**: Upload your resume or describe yourself manually.
- 🔍 **Smart Retrieval**: Uses semantic search with SBERT to find scholarships with the highest relevance.
- 🌐 **Built with Next.js**: A modern, performant, and scalable frontend framework.

---

## 🧠 The AI Model

The core matching engine uses **Sentence-BERT (SBERT)** fine-tuned on a **custom-mined scholarship dataset**. It evaluates the semantic similarity between user input and scholarship descriptions to deliver precise results.

- 🤗 Model Hosted on Hugging Face:  
  🔗 https://huggingface.co/hauzantsaaqif/beasiswa_sbert

- 📚 Custom dataset from large-scale scholarship data mining
- 🔍 Embedding-based similarity matching

---

## 🛰️ Model Deployment (Server)

The backend model is served via:

- ☁️ **Google Colab** for lightweight, serverless hosting
- 🌐 **Ngrok** for exposing FastAPI endpoints publicly
- ⚡ **FastAPI** for efficient inference serving

To deploy the model:

1. Open the Colab notebook:  
   [📓 Colab Server Notebook](https://colab.research.google.com/drive/1ekhncbLWpavb7338ltb2KOqeu4QILDmE?usp=sharing)

2. Mount Google Drive using the shared model files:  
   [📁 Model Drive Folder](https://drive.google.com/drive/folders/1BfqavA0YotO5Sg02tt5UHvdzF2BZjdis?usp=sharing)

3. Replace the `NGROK_AUTH_TOKEN` with your own key when prompted

4. Copy the **Ngrok Public URL** once the server starts

---

## 🧑‍💻 Running the Web App (Next.js)

To use the SkuleMate Web Interface:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/ArditBaskara/skuleMate.git
   cd skuleMate

   ```

2. **Update the API URL**:  
   Replace all model API URLs with the Ngrok Public URL you copied from Colab.

Edit the following files:

- `app/api/detectCV/route.ts`
- `app/api/detectText/route.ts`

3. **Install dependencies**:

   ```bash
   npm install

   ```

4. **Start the UI Website**:

   ```bash
   npm run dev

   ```

Now, you're ready to test the app. Upload a food image and watch Nutriject break down the nutrition info automatically! 🍱

## Example Output

<img src="public/img_2.png" alt="Nutriject Output Example" width="100%"/>

## 🧰 Tech Stack

- **Frontend**: Next.js (React + TypeScript)
- **Backend**: FastAPI (served via Colab + Ngrok)
- **Model**: SBERT (custom fine-tuned model)
- **Deployment**: Google Colab + Ngrok
- **Data**: Custom-mined scholarship dataset

---

## 🖼️ Example Usage

1. **Input CV (PDF/text) or a brief self-description**
2. **AI matches your profile with top scholarships**
3. **Instantly receive tailored recommendations**

📺 **For a full demonstration, watch the documentation video here**:  
[👉 SkuleMate Demo on YouTube](https://youtu.be/SYM3-IZIcdc)

---

## 🤝 Contributions

Contributions are welcome!
Feel free to open issues or submit pull requests to improve SkuleMate.

---

## 📄 License

This project is licensed under the **MIT License** — use freely with attribution.

---

> “No more endless browsing. Let SkuleMate find the right scholarship for you.”
