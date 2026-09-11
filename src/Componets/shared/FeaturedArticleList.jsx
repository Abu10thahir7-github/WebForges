import { featuredArticles } from '../../data/datas';
import FeaturedArticle from './FeaturedArticle';


export default function FeaturedArticleList() {
  if (!featuredArticles?.length) return null;

  return (
    <section className="w-4/5 m-auto flex flex-col gap-10 py-16">
      {featuredArticles.map((item) => (
        <FeaturedArticle key={item.link} item={item} />
      ))}
    </section>
  );
}