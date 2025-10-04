'use client';

import Button from "@/components/Button";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { useRef } from "react";
import { useForm } from "react-hook-form";

export default function Form({ onFormSuccess }: Readonly<{ onFormSuccess: () => void }>) {
    const { watch, register, handleSubmit, formState } = useForm({ mode: 'onChange' });

    const form = useRef<HTMLFormElement>(null);

    const fullName = watch("fullName");
    const company = watch("company");
    const email = watch("email");
    const phone = watch("phone");
    const message = watch("message");

    const onSubmit = () => {
        onFormSuccess();
    }

    return (
        <form ref={form} className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
                <Input
                    label="Name"
                    watchValue={fullName}
                    error={formState.errors?.fullName?.message as string}
                    {...register(
                        "fullName",
                        {
                            required: { value: true, message: "Name is required" },
                            minLength: { value: 2, message: "Name must be at least 2 characters" },
                            maxLength: { value: 80, message: "Name cannot exceed 80 characters" },
                        }
                    )}
                />

                <Input
                    label="Company (optional)"
                    watchValue={company}
                    error={formState.errors?.company?.message as string}
                    {...register(
                        "company",
                        {
                            maxLength: { value: 80, message: "Company name cannot exceed 80 characters" },
                        }
                    )}
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Input
                    label="Email"
                    watchValue={email}
                    error={formState.errors?.email?.message as string}
                    {...register(
                        "email",
                        {
                            required: { value: true, message: "Email is required" },
                            maxLength: { value: 80, message: "Email cannot exceed 80 characters" },
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email address",
                            },
                        }
                    )}
                />

                <Input
                    label="Phone"
                    watchValue={phone}
                    error={formState.errors?.phone?.message as string}
                    {...register(
                        "phone",
                        {
                            required: { value: true, message: "Phone is required" },
                            maxLength: { value: 80, message: "Phone cannot exceed 80 characters" },
                            pattern: {
                                value: /^\+?[0-9\s-]{7,15}$/,
                                message: "Please enter a valid phone number",
                            },
                        }
                    )}
                />
            </div>

            <div>
                <TextArea
                    cols={5}
                    rows={5}
                    label="Message"
                    watchValue={message}
                    error={formState.errors?.message?.message as string}
                    {...register(
                        "message",
                        {
                            required: { value: true, message: "Message is required" },
                            minLength: { value: 10, message: "Message must be at least 10 characters" },
                            maxLength: { value: 1000, message: "Name cannot exceed 1000 characters" },
                        }
                    )}
                />
            </div>

            <div className="w-fit">
                <Button disabled={!formState.isValid}>
                    Send us a message...
                </Button>
            </div>
        </form>
    )
}