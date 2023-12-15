import { Schema, models, model, Document } from "mongoose";

export interface IInteraction extends Document {
  user: Schema.Types.ObjectId; // reference to user
  action: string;
  question: Schema.Types.ObjectId; // reference to question
  tags: Schema.Types.ObjectId[]; // reference to tags
  answer: Schema.Types.ObjectId; // reference to answer
  createdAt: Date;
}

const InteractionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  action: { type: String, reuired: true },
  question: { type: Schema.Types.ObjectId, ref: "Question" },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  answer: { type: Schema.Types.ObjectId, ref: "Answer" },
  createdAt: { type: Date, default: Date.now },
});

const Interaction =
  models.Interaction || model("Interaction", InteractionSchema);

export default Interaction;
