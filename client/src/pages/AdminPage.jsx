// Desc: Admin page to upload products to the database

import axios from "axios";
import { useForm, useWatch } from "react-hook-form";
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
const formSchema = z
  .object({
    category: z.string({ required_error: "Category is required" }),
    customWorks: z.string().optional(),
    image: z
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
        message: "Price must be less than 10,000",
      }),
  })
  .refine(
    (data) => {
      // Custom works category must have customWorks field
      if (data.category === "Custom Works") {
        return data.customWorks !== "";
      }
      return true;
    },
    {
      message: "Please enter a custom work type",
      path: ["customWorks"],
    },
  )
  .refine(
    (data) => {
      // Paper size must be selected for all categories except Custom Works
      if (data.category !== "Custom Works") {
        return data.paperSize !== "";
      }
      return true;
    },
    {
      message: "Please select a paper size",
      path: ["paperSize"],
    },
  );

// AdminPage component
function AdminPage() {
  // Initialize the form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
      customWorks: "",
      image: undefined,
      paperSize: "",
      price: "",
    },
  });
  // Watch the category field
  const category = useWatch({ control: form.control, name: "category" });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append("category", data.category);
      formData.append("customWorks", data.customWorks);
      formData.append("image", data.image[0]);
      formData.append("paperSize", data.paperSize);
      formData.append("price", data.price);

      const response = await axios.post("/api/products/upload", formData);
      console.log(response.data);
      form.reset();
    } catch (error) {
      console.log("Error submitting the form");
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold text-primaryBlue">
        Admin Page
      </h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="m-auto space-y-8 px-6 sm:w-1/2"
          encType="multipart/form-data"
        >
          {/* Category selection */}
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

          {/* Only show if custom works category is selected */}
          {category === "Custom Works" && (
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
          )}

          {/* Image upload */}
          <FormField
            control={form.control}
            name="image"
            render={() => (
              <FormItem>
                <FormLabel>Upload Image</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Upload image file"
                    type="file"
                    {...form.register("image")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Paper size selection
          Dont show if custom works category is selected
          */}
          {category !== "Custom Works" && (
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
          )}

          {/* Price input */}
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
