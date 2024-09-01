from flask import Flask, request, render_template
import pickle
import numpy as np

app = Flask(__name__)

# Load the trained model and scaler from the "model/" directory
with open('model/heart_disease_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

with open('model/scaler.pkl', 'rb') as scaler_file:
    scaler = pickle.load(scaler_file)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Extract input features from form
    features = [float(x) for x in request.form.values()]
    final_features = [np.array(features)]
    
    # Scale the features
    scaled_features = scaler.transform(final_features)
    
    # Make a prediction
    prediction = model.predict(scaled_features)
    
    # Convert prediction to Yes/No format
    output = "Yes" if prediction[0] == 1 else "No"
    
    return render_template('index.html', prediction_text=f'Heart Disease Prediction: {output}')

if __name__ == "__main__":
    app.run(debug=True)
