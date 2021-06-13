import mongoose from 'mongoose'

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    transcript: {
        type: String,
        default: "Yüklendi."
    },
    hidden: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    duration: {
        type: 'Number',
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.models.File ||  mongoose.model('File', fileSchema);