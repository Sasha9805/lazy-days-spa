import { Treatments } from "../Treatments";

import { render, screen } from "@/test-utils";

test("renders response from query", () => {
	render(<Treatments />);
});
