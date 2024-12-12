import Image from "next/image"

export default function HeroSection () {
    return (
    <section className="flex gap-6 items-center mt-10 mx-10">
        {/*left */}
        <div className="flex-1">
            <h1 className="font-bold text-2xl text-purple-950">Welcome to Lala's Ice-cream Shop</h1>
            <p className="text-lg text-gray-600 mt-2">Enjoy new and delicious flavors while sitting at your home and take fun of cold weather watching your favorite program and enjoying our recently added wonderful and mouth watering flavors</p>
            <button className="bg-purple-900 text-white py-2 px-4 mt-5">Order Now</button>
        </div>
        {/*right*/}
         <div className="flex-1">
                <Image
            src="/Image/poster.jfif"
            alt="Poster"
            height={700}
            width={700} />
        </div>
    </section>
        
    )
}