<h1 align="center">🩺 AI-Powered Health Risk Profiler</h1> <p align="center"> An AI-powered backend service that analyzes lifestyle survey responses (text or scanned images) and generates a structured health risk profile including risk factors, risk level, and actionable recommendations. </p> <p align="center"> This project demonstrates OCR processing, semantic normalization, risk scoring, guardrails for incomplete data, and AI-driven recommendation generation. </p>
<h2>🚀 Features</h2> <ul> <li>📄 Accepts text and scanned image survey inputs</li> <li>🔍 OCR + AI semantic normalization</li> <li>⚠️ Guardrails for incomplete profiles</li> <li>📊 Risk scoring with rationale</li> <li>🧠 AI-generated actionable recommendations</li> <li>🌐 Public API exposure using ngrok</li> <li>📦 Modular, industry-standard backend architecture</li> </ul>
<h2>🏗 Architecture</h2> <p><b>Project Folder Structure</b></p> <pre> 📦 Project Root │ ├── src/ │ ├── controllers/ │ ├── routes/ │ ├── services/ │ ├── pipeline/ │ ├── utils/ │ └── server.js │ ├── assets/ │ └── survey_form.jpg │ ├── .env └── package.json </pre>
<h3>📂 Folder Responsibilities</h3> <ul> <li><b>controllers</b> → API request handling</li> <li><b>routes</b> → API route definitions</li> <li><b>services</b> → Business logic and AI integrations</li> <li><b>pipeline</b> → Risk analysis processing stages</li> <li><b>utils</b> → Helper utilities</li> <li><b>server.js</b> → Application entry point</li> <li><b>assets</b> → OCR input images</li> </ul> <h3>
<h3>🔄 Pipeline Flow</h3> <p align="center">

<b>Input</b>
⬇️
<b>OCR / Text Parsing</b>
⬇️
<b>Normalization</b>
⬇️
<b>Factor Extraction</b>
⬇️
<b>Confidence & Guardrails</b>
⬇️
<b>Risk Scoring</b>
⬇️
<b>Recommendations</b>

</p>
<h2>⚙️ Setup Instructions</h2> <h3>1️⃣ Clone repository</h3> <pre> git clone &lt;your-github-repo-url&gt; cd AIPoweredHealthRiskProject </pre> <h3>2️⃣ Install dependencies</h3> <pre> npm install </pre> <h3>3️⃣ Create .env file</h3> <pre> GEMINI_API_KEY=your_api_key_here </pre> <h3>4️⃣ Start server</h3> <pre> npm start </pre>

<b>Server runs at:</b>

<pre> http://localhost:3000 </pre> <h3>5️⃣ Start ngrok</h3> <pre> ngrok http 3000 </pre>

Copy the generated HTTPS URL.

<h2>🔗 Public API (Demo)</h2>

<b>Example:</b>

<pre> https://postmedian-nonsubordinate-adriane.ngrok-free.dev </pre>

⚠️ <b>Note:</b> ngrok URLs are temporary. Refer to screen recording for live demo.

<h2>🧪 Test Cases</h2> <h3>🧪 Test Case 1 — High Risk</h3> <pre> { "input": "He is 45 years old, smokes daily, eats sugary food, never exercises and drinks alcohol regularly." } </pre> <pre> curl -X POST https://YOUR_NGROK_URL/analyze/text \ -H "Content-Type: application/json" \ -d '{"input":"He is 45 years old, smokes daily, eats sugary food, never exercises and drinks alcohol regularly."}' </pre>
<h3>🧪 Test Case 2 — Moderate Risk</h3> <pre> { "input": "She is 30, does not smoke, eats balanced meals, but rarely exercises." } </pre> <pre> curl -X POST https://YOUR_NGROK_URL/analyze/text \ -H "Content-Type: application/json" \ -d '{"input":"She is 30, does not smoke, eats balanced meals, but rarely exercises."}' </pre>
<h3>🧪 Test Case 3 — Low Risk (Healthy)</h3> <pre> { "input": "She is 28 years old, exercises regularly, eats healthy food, does not smoke and does not drink alcohol." } </pre> <pre> curl -X POST https://YOUR_NGROK_URL/analyze/text \ -H "Content-Type: application/json" \ -d '{"input":"She is 28 years old, exercises regularly, eats healthy food, does not smoke and does not drink alcohol."}' </pre>
<h3>🧪 Test Case 4 — Guardrail (Incomplete Profile)</h3> <pre> { "input": "He is 25." } </pre> <pre> curl -X POST https://YOUR_NGROK_URL/analyze/text \ -H "Content-Type: application/json" \ -d '{"input":"He is 25."}' </pre>
<h2>🖼 Image API</h2> <h3>POST /analyze/image</h3> <pre> curl -X POST https://YOUR_NGROK_URL/analyze/image \ -F "file=@assets/survey_form.jpg" </pre>
<h2>📤 Sample Output</h2> <pre> { "answers": { "age": 30, "smoker": false, "alcohol": null, "exercise": "rare", "diet": "balanced" }, "missing_fields": ["alcohol"], "confidence": 0.8, "factors": ["low exercise"], "factor_confidence": 0.76, "risk_level": "low", "score": 20, "rationale": ["low activity"], "recommendations": [ "Take short daily walks", "Use stairs when possible", "Stretch every hour" ], "status": "ok" } </pre>
<h2>🛑 Guardrail Example</h2>

<b>Input</b>

<pre> He is 25. </pre>

<b>Output</b>

<pre> { "status": "incomplete_profile", "reason": ">50% fields missing" } </pre>
<h2>🧪 Test Scenarios Covered</h2> <table> <tr><th>Case</th><th>Description</th></tr> <tr><td>High Risk</td><td>Smoker + poor diet + no exercise</td></tr> <tr><td>Moderate Risk</td><td>Partial healthy</td></tr> <tr><td>Low Risk</td><td>Healthy lifestyle</td></tr> <tr><td>Incomplete</td><td>Guardrail triggered</td></tr> <tr><td>OCR</td><td>Image survey form</td></tr> </table>
<h2>🧠 AI Usage</h2> <ul> <li>OCR + semantic normalization</li> <li>Natural language understanding</li> <li>Recommendation generation</li> <li>Validation and chaining</li> </ul>

All outputs remain non-diagnostic.

📸 API Screenshots
High Risk Text Input
media/screenshots/text-test-low-risk.png
Low Risk Text Input
media/screenshots/image-test.png
Image OCR Input
media/screenshots/image-test.png
Guardrail Trigger Case
media/screenshots/guardrail.png
🎥 Demo Videos

Text API Demo Video link: https://drive.google.com/file/d/15zo8U9xt9DwT7nFi1ZdJ3znsv0hA98qO/view?usp=sharing

OCR API Demo Video link: https://drive.google.com/file/d/1BGD_KtAw-RU2125McJTp_Fdh_6WwaUwF/view?usp=sharing

A short screen recording demonstrates:

Server running

ngrok public URL

Text API test

Image OCR test

JSON output

<h2>🧩 Error Handling</h2> <ul> <li>Missing input validation</li> <li>OCR fallback checks</li> <li>Guardrail enforcement</li> <li>AI response validation</li> </ul>
<h2>📈 Future Improvements</h2> <ul> <li>Database persistence</li> <li>User history tracking</li> <li>Dashboard UI</li> <li>Batch processing</li> <li>Multilingual OCR</li> </ul>
<h2>👩‍💻 Author</h2>

<b>Sakshee Shukla</b><br/>
SDE Intern Assignment – Grow Insurance
