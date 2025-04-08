import { Logo } from "@/components/CustomIcon";

const SiteLoader = () => {
    return (
        <section className="hcc w-full h-screen section">
        <span className="animate-bounce w-max h-max">
            <Logo size="large"/>
        </span>
        </section>
    );
};

export default SiteLoader;