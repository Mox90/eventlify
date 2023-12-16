import { Schema, Types, model, models } from 'mongoose';

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  loc?: string;
  imageUrl?: string;
  startDateTime: Date;
  endDateTime: Date;
  price?: string;
  isFree: boolean;
  url?: string;
  //  category: Types.ObjectId | string | any; // Assuming the category is of type ObjectId or string
  //organizer: Types.ObjectId | string | any; // Assuming the organizer is of type ObjectId or string
  category: { _id: string; name: string }; // Assuming the category is of type ObjectId or string
  organizer: { _id: string; firstName: string; lastName: string }; // Assuming the organizer is of type ObjectId or string
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    loc: { type: String },
    imageUrl: { type: String },
    startDateTime: { type: Date, default: Date.now },
    endDateTime: { type: Date, default: Date.now },
    price: { type: String },
    isFree: { type: Boolean, default: false },
    url: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    organizer: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

const Event = models.Event || model('Event', EventSchema);

export default Event;
