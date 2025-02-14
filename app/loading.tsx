import CustomIcon from "@/components/CustomIcon";

const SiteLoader = () => {
    return (
        <section className="hcc w-screen h-screen section">
        <span className="animate-bounce w-max h-max text-5xl text-primary font-bold font-serif">
            <CustomIcon className="size-20 inline-block"
                style={{ fill: 'var(--primary-color)' }}
            />
            AINAS
        </span>
        </section>
    );
};

export default SiteLoader;