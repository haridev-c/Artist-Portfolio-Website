import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Shadcn imports
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Zod schema definition
const formSchema = z.object({
  category: z.string({ required_error: "Category is required" }),
  customWorks: z.string().optional(),
  file: z
    .instanceof(FileList)
    .refine((file) => file?.length == 1, "File is required."),
  paperSize: z.string().optional(),
  price: z
    .string()
    .refine((val) => !isNaN(parseFloat(val)), {
      message: "Price must be a valid number",
    })
    .transform((val) => parseFloat(val))
    .refine((val) => val <= 10000, {
      message: "Price must be less than 10000",
    }),
});

function AdminPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
      customWorks: "",
      file: undefined,
      paperSize: "",
      price: "",
    },
  });

  const fileRef = form.register("file");

  const onSubmit = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("category", data.category);
    formData.append("customWorks", data.customWorks);
    formData.append("file", data.file[0]);
    formData.append("paperSize", data.paperSize);
    formData.append("price", data.price);

    axios
      .post("/api/products/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        console.log(result);
        form.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold text-primaryBlue">
        Admin Page
      </h1>

      {/* Shadcn form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="m-auto space-y-8 px-6 sm:w-1/2"
          encType="multipart/form-data"
        >
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Pencil Portrait">
                      Pencil Portrait
                    </SelectItem>
                    <SelectItem value="Color Portrait">
                      Color Portrait
                    </SelectItem>
                    <SelectItem value="Caricature">Caricature</SelectItem>
                    <SelectItem value="Custom Works">Custom Works</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="customWorks"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter custom work type</FormLabel>
                <FormControl>
                  <Input placeholder="Custom work type" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Image</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Upload image file"
                    type="file"
                    onChange={(event) => {
                      field.onChange(event.target?.files?.[0] ?? undefined);
                    }}
                    {...fileRef}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="paperSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Paper Size</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a paper size" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="A4">A4</SelectItem>
                    <SelectItem value="A3">A3</SelectItem>
                    <SelectItem value="Small">Single Line Drawing</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder="Enter price" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}

export default AdminPage;
