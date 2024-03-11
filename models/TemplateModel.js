import mongoose from 'mongoose';

const TemplateModelSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
    default: 0
  }
});

// Check if the model exists before compiling it
const TemplateModel = mongoose.models.TemplateModel || mongoose.model('TemplateModel', TemplateModelSchema);

export default TemplateModel;
