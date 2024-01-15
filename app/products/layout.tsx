import Banner from "@/src/components/common/Banner";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const banners = [
    {
      id: 1,
      image: "/images/testBanner.jpg",
      title: "Products",
      subtitle: "DFKorea의 제품들을 소개합니다.",
    },
  ];
  return (
    <>
      <Banner banners={banners} />
      {children}
    </>
  );
}
