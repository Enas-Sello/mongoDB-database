// A

db.instructors.find()

//B

db.instructors.find({salary:{$gt:4000}},{_id:0 ,firstName:1,salary :1})

//C

db.instructors.find({age:{$lte:25}},{})

//D

db.instructors.find({

    'address.city':'mansoura','address.street':{$in:[10,14]}

    },

{_id:0, firstName:1 , address:1 , salary:1

    })

//E

  db.instructors.find(

    {courses:{$all:['js' ,'jquery']} }    )

//F

db.instructors.find({

   courses:({$exists:true})

    }).forEach((instructor)=>

      {print(

        '${instructor.firstName}:${instructor.courses.length}')})

   //G



db.Instructors.find({firstName:{$exists: true},

lastName:{$exists: true}}).sort({

  firstName: 1, lastName: -1}).forEach(Instructor=>{print(

  `FullName: ${Instructor.firstName} 

  ${Instructor.lastName},

Age: ${Instructor.age}`)});

//H

db.instructors.find({$or:[

    {firstName:'mohammed'},

    {lastName:'mohammed'},

]})

//I

db.instructors.deleteOne({firstName:'ebtesam',courses:{$size:5}})

//j 

db.instructors.updateMany({},{$set:{active:true}},{upsert:true})

//k 

db.instructors.updateOne(

{firstName:'mazen' ,lastName:'mohammed' ,courses:'EF'}

,{$set: {'courses.$':'jquery'}}

)

//L 

db.instructors.updateOne(

{firstName:'noha' ,lastName:'hesham'},

{$push:{courses:'jquery'}}

)

//M 

db.instructors.updateOne(

{firstName:'ahmed' ,lastName:'mohammed'},

{$unset:{courses:''}}

)

//N 

db.instructors.updateMany(

{courses:{$size:3}},

{$inc:{salary:-500}})

//O 

db.instructors.updateMany({},{$rename:{'address':'fullAddress' }})



//p 

db.instructors.updateOne(

{firstName:'noha' ,lastName:'hesham'},

{$set:{'fullAddress.street':20}}

)