const mongoose = require('mongoose');

const classSchema = {
    name: String,
    studentid: String,
    teacherid: String,
    updatedAt: {
        type: Date,
        default: Date.now()
    }
};

// classSchema.pre('save', function (next) {
//     this.updatedAt = Date.now()
//     next()
// });

classSchema.statics = {
    async saveTeacher(data) {
        teacher = new Teacher({
            name: data.name,
            classid: data.classid
        })

        await teacher.save()
        return data
    }
} 

const Class = mongoose.model('Class', classSchema)
