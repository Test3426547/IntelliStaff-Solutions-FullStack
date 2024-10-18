import { Injectable } from '@nestjs/common';
import * as tf from '@tensorflow/tfjs-node';

@Injectable()
export class AITrainingService {
  private model: tf.Sequential;

  constructor() {
    this.initializeModel();
  }

  private initializeModel() {
    this.model = tf.sequential();
    this.model.add(tf.layers.dense({ units: 64, activation: 'relu', inputShape: [10] }));
    this.model.add(tf.layers.dense({ units: 32, activation: 'relu' }));
    this.model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

    this.model.compile({
      optimizer: tf.train.adam(),
      loss: 'binaryCrossentropy',
      metrics: ['accuracy'],
    });
  }

  async train(trainingData: { input: number[][], output: number[] }) {
    const { input, output } = trainingData;
    const xs = tf.tensor2d(input);
    const ys = tf.tensor2d(output, [output.length, 1]);

    await this.model.fit(xs, ys, {
      epochs: 100,
      batchSize: 32,
      callbacks: tf.callbacks.earlyStopping({ monitor: 'val_loss', patience: 5 }),
    });

    xs.dispose();
    ys.dispose();
  }

  async predict(input: number[]) {
    const inputTensor = tf.tensor2d([input]);
    const prediction = this.model.predict(inputTensor) as tf.Tensor;
    const result = prediction.dataSync()[0];
    inputTensor.dispose();
    prediction.dispose();
    return result;
  }
}