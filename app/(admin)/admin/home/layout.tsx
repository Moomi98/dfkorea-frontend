"use client";

import styled from "styled-components";

import Menu from "@/src/components/admin/Menu";

const Contaier = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Child = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 1.5rem;
`;

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Contaier>
      <Menu />
      <Child>{children}</Child>
    </Contaier>
  );
}
