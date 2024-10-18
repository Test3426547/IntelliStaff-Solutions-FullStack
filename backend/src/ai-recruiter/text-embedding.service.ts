import { Injectable } from '@nestjs/common';
import * as tf from '@tensorflow/tfjs-node';
import * as use from '@tensorflow-models/universal-sentence-encoder';

@Injectable()
export class TextEmbeddingService {
  private model: use.UniversalSentenceEncoder;

  constructor() {
    this.initializeModel();
  }

  private async initializeModel() {
    this.model = await use.load();
  }

  async embedText(text: string) {
    const embeddings = await this.model.embed(text);
    return embeddings.arraySync()[0];
  }

  async compareEmbeddings(embedding1: number[], embedding2: number[]) {
    const similarity = tf.tensor1d(embedding1).dot(tf.tensor1d(embedding2)).arraySync();
    return similarity;
  }
}