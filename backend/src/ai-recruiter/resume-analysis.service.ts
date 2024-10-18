import { Injectable } from '@nestjs/common';
import * as tf from '@tensorflow/tfjs-node';
import * as nlp from 'nlp.js';

@Injectable()
export class ResumeAnalysisService {
  private model: tf.Sequential;

  constructor() {
    this.initializeModel();
  }

  private async initializeModel() {
    this.model = tf.sequential();
    this.model.add(tf.layers.dense({ units: 64, activation: 'relu', inputShape: [10] }));
    this.model.add(tf.layers.dense({ units: 32, activation: 'relu' }));
    this.model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
    this.model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy' });
  }

  async analyze(resumeText: string) {
    const doc = nlp(resumeText);
    
    const skills = doc.match('#Skill').out('array');
    const education = doc.match('#Education').out('array');
    const experience = doc.match('#Experience').out('array');

    // Use TensorFlow.js model for more advanced analysis
    const inputTensor = tf.tensor2d([skills.length, education.length, experience.length], [1, 3]);
    const prediction = this.model.predict(inputTensor) as tf.Tensor;
    const score = prediction.dataSync()[0];

    inputTensor.dispose();
    prediction.dispose();

    return {
      skills,
      education,
      experience,
      score,
    };
  }
}