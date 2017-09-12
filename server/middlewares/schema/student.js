const mongoose = require('mongoose')

const studentSchema = {
    name: String,
    classid: String,
    updatedAt: {
        type: Date,
        default: Date.now()
    }
}

studentSchema.pre('save', function (next) {
    this.updatedAt = Date.now()

    next()
})

studentSchema.statics = {
    async saveStudent(data) {
        student = new Student({
            name: data.name,
            classid: data.classid
        })

        await student.save()
        return data
    }
} 

const Student = mongoose.model('Student', studentSchema)