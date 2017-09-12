const mongoose = require('mongoose');

const teacherSchema = {
    name: String,
    teacherid: String,
    updatedAt: {
        type: Date,
        default: Date.now()
    }
};

teacherSchema.pre('save', function (next) {
    this.updatedAt = Date.now()
    next()
});

teacherSchema.statics = {
    async saveTeacher(data) {
        teacher = new Teacher({
            name: data.name,
            classid: data.classid
        })

        await teacher.save()
        return data
    }
} 

const Teacher = mongoose.model('Teacher', teacherSchema)