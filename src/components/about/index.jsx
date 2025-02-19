import React from 'react'
import clsx from 'clsx'

const ItemLayout = ({children, className}) => {
    return <div className={clsx("custom-bg p-8 rounded-xl flex items-center justify-center space-y-4", className)}>
    {children}
</div>
}

function AboutDetails() {
  return (
    <section className="py-20 w-full">
        <div className="grid grid-cols-12 gap-8 w-full">
            <ItemLayout className="col-span-8 row-span-2 flex-col items-start">
                <h2 className="text-2xl text-left w-full capitalize">
                    Architect of Enchantment
                </h2>
                <p className="font-light">
                    My journey in web development is powered by an array of mystical tools and languages, with JavaScript casting the core of my enchantments. I wield frameworks like React.js and Next.js with precision, crafting seamless portals (websites) that connect realms (users) across the digital universe. The ancient arts of the Jamstack empower me to create fast, secure, and dynamic experiences, while my design skills ensure every creation is not only functional but visually captivating. Join me as I continue to explore new spells and technologies to shape the future of the web.
                </p>
            </ItemLayout>
            <ItemLayout className="col-span-4 text-accent">
                <p className="font-semibold w-full text-left text-5xl">
                    25+ <sub cassName="font-semibold text-base">clients</sub>
                </p>
            </ItemLayout>
            <ItemLayout className="col-span-4 text-accent">
                <p className="font-semibold w-full text-left  text-5xl">
                    4+ <sub cassName="font-semibold text-base">years of experience</sub>
                </p>
            </ItemLayout>
        </div>
    </section>
  )
}

export default AboutDetails