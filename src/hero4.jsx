import img from './assets/WhatsApp Image 2024-07-06 at 00.30.16_3b792090.jpg'
 const Hero4=()=>{

    return (
        
<div>
    <div/>
<section className="about" id="about">
<h2 className="heading">About <span>Me</span><span className="animate scroll" ></span></h2>

<div className="about-img">
   <img src={img} alt="" />
    <span className="circle-spin"></span>
    <span className="animate scroll" ></span>
</div>

<div className="about-content">
    <h3>Hi there! Glad to see you here.<span className="animate scroll" ></span></h3>
    <p>Hello! Nishat Mahmud here. A technology fanatic!
        Currently, I am enrolled in the Department of
        Computer Science and Engineering at Jagannath
        University in Dhaka. My early education was
        completed from Mymensingh Zilla School and Govt.
        Ananda Mohon College in Mymensingh.
        <span className="animate scroll" ></span>
    </p>

    <div className="btn-box btns">
        <a href="#contact" className="btn">Contact Me</a>
        <span className="animate scroll" ></span>
    </div>
</div>

</section>
</div>


     
    

    )

    

}
export default Hero4