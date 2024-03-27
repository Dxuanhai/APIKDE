"use client";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { productFormSchema } from "@/app/lib/validation";
import { z } from "zod";
import { Tproduct, TproductFormSchema } from "@/app/lib/type";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { twMerge } from "tailwind-merge";

interface Props {
  product?: Tproduct;
  typeSubmit: string;
  classname?: string;
  handleSubmit: (data: TproductFormSchema) => boolean | void;
}

const ProductForm = ({
  product,
  typeSubmit,
  classname,
  handleSubmit,
}: Props) => {
  const form = useForm({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      title: product?.title || "",
      desc: product?.desc || "",
      link: product?.link || "",
      type: product?.type || "",
      urlImage: product?.urlImage || "",
      typeAnime: product?.animes[0].type || "",
    },
  });

  function onSubmit(data: z.infer<typeof productFormSchema>) {
    handleSubmit(data);
    form.reset();
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={twMerge(
            "grid",
            "grid-cols-1",
            "md:grid-cols-2",
            "gap-8",
            "w-full",
            "md:w-[600px]",
            "xl:w-[1000px]",
            "px-4",
            "relative",
            "bg-white",
            classname
          )}
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="desc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="desc" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="http or https" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="urlImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="/" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select something" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent {...field}>
                    <SelectItem value="ANIME">ANIME</SelectItem>
                    <SelectItem value="TOY">TOY</SelectItem>
                    <SelectItem value="BOX">BOX</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="typeAnime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type Anime</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select something" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent {...field}>
                    <SelectItem value="TV">TV</SelectItem>
                    <SelectItem value="MOVIE">MOVIE</SelectItem>
                    <SelectItem value="GAME">GAME</SelectItem>
                    <SelectItem value="OTHER">OTHER</SelectItem>
                    <SelectItem value="NONE">NONE</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <Button className="md:translate-x-[55%] my-2  " type="submit">
            {typeSubmit}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ProductForm;
