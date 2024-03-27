"use client";
import { Tproduct } from "@/app/lib/type";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  data: Tproduct[];
  Delete: (id?: number) => void;
}

const TableProduct = ({ data, Delete }: Props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Table className={`hidden xl:block ${toggle ? "opacity-30" : ""}`}>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[15%] font-bold text-2xl">Title</TableHead>
          <TableHead className="w-[15%] font-bold text-xl">Image</TableHead>
          <TableHead className="w-[20%] font-bold text-xl">
            Description
          </TableHead>
          <TableHead className="w-[8%] font-bold text-xl">Type</TableHead>
          <TableHead className="w-[12%] font-bold text-xl">
            Type Anime
          </TableHead>
          <TableHead className="w-[15%] font-bold text-xl">Link</TableHead>
          <TableHead className="text-right w-[15%] font-bold text-xl">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.map((item) => (
            <TableRow key={item?.id}>
              <TableCell className="text-[#444444] font-bold text-xl">
                {item?.title}
              </TableCell>
              <TableCell>
                <div
                  className="w-full h-[200px] md:h-[300px] bg-center bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${item.urlImage})` }}
                ></div>
              </TableCell>
              <TableCell>{item?.desc}</TableCell>
              <TableCell>{item?.type}</TableCell>
              <TableCell>
                {item?.animes && item.animes?.length > 0
                  ? item.animes[0]?.type
                  : ""}
              </TableCell>
              <TableCell className="break-all">{item?.link}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button>
                  <Link href={`/products/${item.id}`}>Update</Link>
                </Button>
                <Button variant="destructive" onClick={() => Delete(item.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};
export default TableProduct;
