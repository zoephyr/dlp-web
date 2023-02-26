import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import BasicNavigation from "~/components/BasicNavigation/BasicNavigation";

const About: NextPage = () => {
  
    return (
      <>
        <Head>
          <title>About Dying Lotus</title>
          <meta name="description" content="Generated by create-t3-app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              Dying <span className="text-[hsl(280,100%,70%)]">Lotus</span> Philosophy
            </h1>
            <p className="text-xl text-white">
            Dying Lotus Philosophy began in October 2019, and was originally called Alan Watts Philosophy. It was created with the intention to make a community to talk about ideas related to philosophy, especially regarding the nature of reality, and of ourselves.

After some time the server grew in size, and there were more discussions about many different subjects of philosophy and different ideas, growing beyond just Watts - and so it was changed to: Dying Lotus Philosophy.

Why Dying Lotus? The name was inspired in part by the Buddha's Flower Sermon. Here is that story: 

Toward the end of his life, the Buddha took his disciples to a quiet pond for instruction. As they had done so many times before, the Buddha's followers sat in a small circle around him, and waited for the teaching.

But this time the Buddha had no words. He reached into the muck and pulled up a lotus flower. And he held it silently before them, its roots dripping mud and water.

The disciples were greatly confused. Buddha quietly displayed the lotus to each of them. In turn, the disciples did their best to expound upon the meaning of the flower: what it symbolized, and how it fit into the body of Buddha's teaching.

When at last the Buddha came to his follower Mahakasyapa, the disciple suddenly understood. He smiled and began to laugh. Buddha handed the lotus to Mahakasyapa and began to speak.

“What can be said I have said to you,” smiled the Buddha, “and what cannot be said, I have given to Mahakashyapa.”

Mahakashyapa became Buddha's successor from that day forward. 
This story can be interpreted many ways. There is a duality between the mud and roots, out of which this beautiful, pristine flower grows. But it is also about the impermanence of life. A compelling image for me is a lotus of endless petals, both growing and dying simultaneously, as a symbol of this. And so that is the symbol of our server: an endless lotus, it's outer petals dying and falling, it's newer petals growing out from the center, in a ceaseless flow.

So why not call it “growing” lotus then? Why focus on the dying? Most of us shy away from the concept of death. But death isn't a bad thing, it is a fundamental and necessary part of life. We cannot separate the two. As Watts says, life implies death. But death also implies life. And so the lotus is both growing and dying at the same time. When we can see both, not just one or the other, we are seeing all of reality.
            </p>
            <BasicNavigation includeIndex={true}></BasicNavigation>
          </div>
        </main>
      </>
    );
  };

  

export default About;