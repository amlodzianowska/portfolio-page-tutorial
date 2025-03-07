import React from 'react'
import clsx from 'clsx'

const ItemLayout = ({children, className}) => {
    return <div className={clsx("custom-bg p-8 rounded-xl flex items-center justify-center space-y-4", className)}>
    {children}
</div>
}

const AboutDetails = () => {
  return (
    <section className="md:py-20 w-full">
        <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
            <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
                <h2 className="text-xl md:text-2xl text-left w-full capitalize">
                    Architect of Enchantment
                </h2>
                <p className="font-light">
                    My journey in web development is powered by an array of mystical tools and languages, with JavaScript casting the core of my enchantments. I wield frameworks like React.js and Next.js with precision, crafting seamless portals (websites) that connect realms (users) across the digital universe. The ancient arts of the Jamstack empower me to create fast, secure, and dynamic experiences, while my design skills ensure every creation is not only functional but visually captivating. Join me as I continue to explore new spells and technologies to shape the future of the web.
                </p>
            </ItemLayout>
            <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
                <p className="font-semibold w-full text-left text-2xl sm:text-4xl md:text-5xl">
                    25+ <sub className="font-semibold text-base">clients</sub>
                </p>
            </ItemLayout>
            <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
                <p className="font-semibold w-full text-left text-2xl sm:text-4xl md:text-5xl">
                    4+ <sub className="font-semibold text-base">years of experience</sub>
                </p>
            </ItemLayout>
            <ItemLayout className={"col-span-full sm:col-span-4 md:col-span-4 !p-0"}>
                <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs/?username=amlodzianowska&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="github stats" loading="lazy" />
            </ItemLayout>
            <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
                <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=amlodzianowska&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="github stats" loading="lazy" />
            </ItemLayout>
            <ItemLayout className={"col-span-full !p-0"}>
                <img className="w-full h-auto" src="https://skillicons.dev/icons?i=html,css,cs,dotnet,git,github,graphql,mongodb,mysql,postgres,postman,jquery,jest,python,js,ts,react,nextjs,nodejs,cypress,docker,aws,arduino,autocad,blender,rider,terraform,treejs" alt="known technologies icons" loading="lazy" />
            </ItemLayout>
            <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                <img className="w-full h-auto" src="https://github-readme-streak-stats.herokuapp.com?user=anuraghazra&theme=dark&hide_border=true&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="github streak" loading="lazy" />
            </ItemLayout>
            <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/gist?id=bbfce31e0217a3689c8d961a356cb10d&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2" alt="pinned repo" loading="lazy" />
            </ItemLayout>
        </div>
    </section>
  )
}

export default AboutDetails