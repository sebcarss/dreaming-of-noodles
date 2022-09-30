import Layout from "../components/layout";
import Container from 'react-bootstrap/Container'
import Image from 'next/image';

export async function getStaticProps() {
  const title = "Dreaming of Noodles";
  const preview = false

  return {
    props: {
      title,
      preview,
    },
  };
}

type HomeProps = {
  title: string;
  preview: boolean;
};

export default function Home({ title, preview }: HomeProps) {
  return (
    <Layout title={title} preview={preview} >
      <div className="d-flex justify-content-center">
        <Image 
          alt="dreaming of noodles logo" 
          src="https://dreamingofnoodles.s3.eu-west-1.amazonaws.com/images/dreaming-of-noodles.png" 
          width={320} 
          height={320}
          layout="fixed" />
      </div>
      <Container className="mt-3">
        <div  className="lead text-center mb-3 mt-5">
          I&apos;m currently slurping on some noodles and as soon as I&apos;m done I&apos;ll get back to making this website.
        </div>
      </Container>
    </Layout>
  );
}
