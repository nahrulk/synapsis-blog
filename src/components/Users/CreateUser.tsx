"use client";

import React, { useState } from "react";
import ButtonPrimary from "../shared/Button/ButtonPrimary";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import Input from "../shared/Input/Input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaUser } from "@/lib/fromShema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { toast } from "sonner";
import { postAUser } from "@/api/users";
import { ErrorType } from "@/types/ErrorType";
import { GetAUserData } from "@/types/users/GetAUsersData";
import { useRouter } from "next/navigation";

const CreateUser = () => {


  const router = useRouter();

  
  const [loading, setLoading] = useState<boolean>(false);

  const formCreateUser = useForm<z.infer<typeof formSchemaUser>>({
    resolver: zodResolver(formSchemaUser),
    defaultValues: {
      nama: "",
      email: "",
      gender: "",
      status: "",
    },
  });


  const handleCreateUser = async (
    values: z.infer<typeof formSchemaUser>
  ) => {
    setLoading(true);
  // toast.info(`${values.nama},${values.email},${values.status},${values.gender}`)

    try {
      
      const createNewUser = await postAUser(values.nama,values.email,values.gender,values.status)

      if ("data" in createNewUser && createNewUser.data && "id" in createNewUser.data) {
        // This means createNewUser is of type GetAUserData and has an ID
        // Handle the success case here
        const userData = createNewUser.data;
        // Access properties like userData.id, userData.name, etc.
        toast.success( `Success create user ${userData.name}`)
        setLoading(false);
        router.push("/users/list")
      } else {
        // Handle the error case here
        if (Array.isArray(createNewUser.data)) {
          // Assuming error response has a "message" property
          toast.warning(`${createNewUser.data[0]?.field} ${createNewUser.data[0]?.message}` || "Unknown error occurred");
          setLoading(false);
        } else {
          // Handle any other error types
          toast.error("An error occurred while creating the user");
          setLoading(false);
        }
      }
    } catch (error) {
      toast.info(`${error}`)
      setLoading(false);
    }

  };

  return (
    <div className={`nc-AccountPage`}>
      <div className="container">
        <div className="my-12 sm:lg:my-16 lg:my-24 max-w-4xl mx-auto space-y-8 sm:space-y-10">
          {/* HEADING */}
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Create New User
            </h2>
            <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
              Anda bisa membuat user dengan melengkapi form dibawah
            </span>
          </div>
          <div className="w-full border-b-2 border-neutral-100 dark:border-neutral-700"></div>
          <div className="flex flex-col md:flex-row">
            <Form {...formCreateUser}>
              <form
                onSubmit={formCreateUser.handleSubmit(handleCreateUser)}
                className="flex-grow mt-10 md:mt-0 md:pl-16 max-w-3xl space-y-5 sm:space-y-6 md:sm:space-y-7"
              >
                {/* ---- */}
                <div className="flex flex-col md:flex-row w-full justify-between gap-4">
                  <div className="flex-1">
                    <FormField
                      control={formCreateUser.control}
                      name="nama"
                      render={({ field }) => (
                        <FormItem className="px-2">
                          <FormLabel className="dark:text-primary-300 text-base">
                            Nama
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              className="px-2 placeholder:text-xs placeholder:italic"
                              placeholder="Masukan nama depan.."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="dark:text-red-300 text-xs " />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <FormField
                      control={formCreateUser.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="px-2">
                          <FormLabel className="dark:text-primary-300 text-base">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="px-2 placeholder:text-xs placeholder:italic"
                              placeholder="Masukan nama Email"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="dark:text-red-300 text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                {/* ---- */}

                <div className="flex flex-col md:flex-row w-full justify-between gap-4">
                  <div className="flex-1">
                    <FormField
                      control={formCreateUser.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem className="px-2">
                          <FormLabel className="dark:text-primary-300 text-base">
                            Gender
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger    className="px-2 placeholder:text-xs placeholder:italic rounded-md" >
                                <SelectValue
                                  placeholder="Pilih Jenis Kelamin"
                               
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="male">male</SelectItem>
                              <SelectItem value="female">female</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="dark:text-red-300 text-xs " />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <FormField
                      control={formCreateUser.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem className="px-2">
                          <FormLabel className="dark:text-primary-300 text-base">
                            Status
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue
                                  placeholder="Pilih Status user"
                                  className="px-2 placeholder:text-xs placeholder:italic"
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                            <SelectItem value="active">active</SelectItem>
                              <SelectItem value="inactive">
                              inactive
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="dark:text-red-300 text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* ---- */}
                <div className="pt-2">
                  <ButtonPrimary
                    loading={loading}
                    disabled={loading}
                    type="submit"
                    className="w-full"
                  >
                    Create User
                  </ButtonPrimary>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
