'use client';
import { printExistingElement } from '@/lib/react-pdf';
import Image from 'next/image'

export default function HomaPage() {
    const handePrintSection = () => {
        printExistingElement("div.printSection #printPart");
    };

    return (
        <div className="container">
            <div className="printSection mt-3">
                <div>
                    <div
                        className="float-end bg-blue-600 py-2 px-3 border rounded text-white"
                        onClick={handePrintSection}
                    >
                        Print
                    </div>
                </div>
                <div id="printPart">
                    <div>
                        <div>
                            <Image
                                src="/image/dymong.jpg"
                                width={120}
                                height={120}
                                className="mb-3 print-form-logo w-28 h-36"
                                alt="moc logo"
                            />
                        </div>
                        <div>
                            <h3 className="text-[16px] text-gray-700 font-bold py-2">Dymong Thai – Full Stack Developer and Tech Innovator</h3>
                            <h3 className="text-[16px] text-gray-700 py-2">Dymong Thai is a proficient Full Stack Developer renowned for his ability to integrate advanced technologies and frameworks to develop robust digital solutions. With a comprehensive understanding of both front-end and back-end development, Dymong excels in creating seamless user interfaces and efficient, scalable backend architectures.</h3>
                            <h3 className="text-[16px] text-gray-700 py-2">Expert in numerous programming languages including JavaScript, TypeScript, and Python, Thai is well-versed with modern development frameworks and libraries such as React, Vue.js, and Node.js. His technical acumen extends to adept database and server management, ensuring high performance and security.</h3>
                            <h3 className="text-[16px] text-gray-700 py-2">In his collaborative role, Thai works alongside cross-functional teams to design and deploy complex web applications. He is dedicated to upholding best practices in coding, testing, and maintenance, ensuring top-tier quality and innovation in all projects. Dymong is commitment to continuous learning and improvement reflects in his approach to tackling challenges and delivering solutions that align with the latest industry standards.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
