const Home = () => {
  return (
    <section className="flex flex-col lg:flex-row container mx-auto py-8 gap-8 justify-between items-center">
      <div className="lg:w-1/2 px-3">
        <img
          src="/public/hero.png"
          alt="hero-image"
          className="w-full rounded"
        />
      </div>
      <div className="lg:w-1/2 px-3">
        <h1 className="text-gray-600 lg:text-xl tracking-wide leading-8 font-bangla">
          Online Exam BD হলো একটি আধুনিক ও ব্যবহারবান্ধব অনলাইন পরীক্ষার
          প্ল্যাটফর্ম, যেখানে শিক্ষার্থী ও প্রশিক্ষণপ্রার্থীরা ঘরে বসেই বিভিন্ন
          বিষয়ের পরীক্ষা দিতে পারে। এই ওয়েবসাইটের মাধ্যমে সহজেই মক টেস্ট, মডেল
          টেস্ট ও বিভিন্ন প্রতিযোগিতামূলক পরীক্ষার প্রস্তুতি নেওয়া যায়।
          ব্যবহারকারীরা নির্দিষ্ট সময়ের মধ্যে পরীক্ষা সম্পন্ন করে সাথে সাথে
          ফলাফল ও বিশ্লেষণ দেখতে পারে, যা তাদের দুর্বলতা চিহ্নিত করতে এবং দক্ষতা
          উন্নত করতে সহায়তা করে। Online Exam BD দ্রুত, নিরাপদ এবং নির্ভরযোগ্য
          একটি প্ল্যাটফর্ম, যা শিক্ষার্থীদের পরীক্ষার প্রস্তুতিকে আরও কার্যকর ও
          সহজ করে তোলে।
        </h1>
      </div>
    </section>
  );
};

export default Home;
