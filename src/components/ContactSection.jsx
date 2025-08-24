
export default function ContactSection(){
    return (
        <section id="contact" className="py-24 px-4 position relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-[min(10vw,70px)] font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
                    Reach out to me!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="gap-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="gap-6 justify-center">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    Mail
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:s.johnle2004@gmail.com">
                                        s.johnle2004@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    LinkedIn
                                </div>
                                <div>
                                    <h4 className="font-medium">LinkedIn</h4>
                                    <a href="">
                                        John Le
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex gap-4 justify-center">
                                <a href="" target="_blank">
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
    )
}