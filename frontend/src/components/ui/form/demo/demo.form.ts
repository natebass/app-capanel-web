import { createFormHook } from "@tanstack/react-form";
import { SubscribeButton } from "../../button/SubscribeButton.tsx";
import { Select, TextArea, TextField } from "../demo.FormComponents.tsx";
import { fieldContext, formContext } from "./demo.form-context.ts";

export const { useAppForm } = createFormHook({
	fieldComponents: {
		TextField,
		Select,
		TextArea,
	},
	formComponents: {
		SubscribeButton,
	},
	fieldContext,
	formContext,
});
