import { Mail } from "lucide-react"
import { FaLinkedin, FaInstagram } from "react-icons/fa"

export default function ContactSection() {
    return (
        <section id="contact" className="relative my-24 mx-4 fadeInUp">
            <div className="mx-auto max-w-5xl border-4 rounded-2xl bg-container-bg">
                <h2 className="text-[50px] lg:text-[70px] font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-12">
                    <div className="p-6">
                        <h3 className="text-2xl text-center font-semibold mb-6">Contact Information</h3>
                        <div className="flex flex-col justify-center gap-8 bg">
                            <div className="flex gap-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Mail />
                                </div>
                                <div className="w-48 text-center">
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:s.johnle2004@gmail.com" className="text-primary transition-colors duration-300 hover:text-primary/60">
                                        s.johnle2004@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <FaLinkedin size={25} />
                                </div>
                                <div className="w-48 text-center">
                                    <h4 className="font-medium">LinkedIn</h4>
                                    <a href="https://www.linkedin.com/in/john-le20/" className="text-primary transition-colors duration-300 hover:text-primary/60">
                                        John Le
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/*                         <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex gap-4 justify-center">
                                
                                <a href="" target="_blank">
                                    Instagram
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}