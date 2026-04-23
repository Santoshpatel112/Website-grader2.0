import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";
import emailjs from "emailjs-com";

import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Toaster } from "./ui/toaster";
import { useToast } from "../hooks/use-toast";
import { useLanguage } from "../Context/LanguageContext";

const Contact = function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const emailData = {
      from_name: data.name,
      from_email: data.email,
      from_mobile: data.mobile,
      message: data.message,
    };

    try {
      await emailjs.send(
        "service_o7qbpvs",
        "template_5yqnsv9",
        emailData,
        "cpP0refyzyRuqJZKV"
      );

      toast({
        title: t("messageSent"),
        description: t("messageSentDesc"),
      });
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: t("messageError"),
        description: t("messageErrorDesc"),
        status: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-card rounded-2xl shadow-lg overflow-hidden md:max-w-2xl border border-border/50">
        <div className="p-8 w-full">
          <div className="uppercase tracking-wide text-sm text-primary font-semibold mb-1">{t("contactUs")}</div>
          <h2 className="block mt-1 text-lg leading-tight font-medium">{t("contactSubhead")}</h2>
          <p className="mt-2 text-muted-foreground">
            {t("contactDesc")}
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-6">
              <FormField
                control={form.control}
                name="name"
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("nameLabel")}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <Input placeholder={t("namePlaceholder")} className="pl-10" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("emailLabel")}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <Input placeholder="john@example.com" className="pl-10" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobile"
                rules={{
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid mobile number",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("mobileLabel")}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <Input placeholder={t("mobilePlaceholder")} className="pl-10" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                rules={{ required: "Message is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("messageLabel")}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <FiMessageSquare className="absolute left-3 top-3 text-muted-foreground" />
                        <Textarea placeholder={t("messagePlaceholder")} className="pl-10 min-h-[100px]" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full btn-primary" disabled={isSubmitting}>
                {isSubmitting ? t("sending") : t("sendMessage")}
              </Button>
            </form>
          </Form>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default Contact;
