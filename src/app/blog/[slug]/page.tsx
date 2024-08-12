export default function PostItemPage({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
