import { DropletsIcon, Sun } from "lucide-react";

export default function PartnerSection() {
    return (
        <section className="section bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
                <div className="hcc flex-wrap gap-10 mx-auto [&>*]:opacity-50">
                    <Sun className="size-10 md:size-20 text-primary"/>
                    <DropletsIcon className="size-10 md:size-20 text-primary"/>
                    <Sun className="size-10 md:size-20 text-primary"/>
                    <DropletsIcon className="size-10 md:size-20 text-primary"/>
                    <Sun className="size-10 md:size-20 text-primary"/>
                    <DropletsIcon className="size-10 md:size-20 text-primary"/>
                    <Sun className="size-10 md:size-20 text-primary"/>
                    <DropletsIcon className="size-10 md:size-20 text-primary"/>
                </div>
            </div>
        </section>
    );
}