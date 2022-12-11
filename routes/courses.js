const ex=require("express")
const { route } = require("express/lib/application");
const Course = require("../models/course")
const router=ex.Router()


//creating the routers

//get courses
router.get("/", async(req,res)=>{
    try{
        const courses= await Course.find()
        res.json(courses);
    }catch (err) {
        console.log(err)
        res.json(err);
    }
});

//get single courses
router.get("/:courseId", async(req,res)=>{
    const courseId=req.params.courseId
    try{
        const c= await Course.findById()
        res.json(c);
    }catch (err) {
        res.json(err);
    }
});

//create courses
router.post("/", async(req,res)=> {
    try{
        const course=await Course.create(req.body)
        res.json(course)
    }catch (err)
    {
        res.json(err);
    }
})

//delete courses
router.delete("/:courseId", async(req,res)=> {
    try{
        Course.remove({"_id":req.params.courseId})
        res.status(200).json({
            message:"Done"
        })
    }catch (err){
        res.json(err)
    }
})

//update courses
router.put("/:courseId", async(req,res)=>{
    const courseId=req.params.courseId
    try{
        const course= await Course.updateOne(
            {
                "_id":courseId
            },
            req.body
        )
        res.json(course)
    }catch(err){
        res.json(err)
    }
})

module.exports=router;