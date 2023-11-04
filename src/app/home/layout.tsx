function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>Home Nav</nav>
      <main>{children}</main>
    </>
  );
}

export default HomeLayout;
