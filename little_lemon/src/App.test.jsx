import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import ReservationForm from "./components/ReservationForm";
import { expect, test } from "vitest";

test('Renders the ReservationForm component', () => {
    render(<ReservationForm />);
    const reservationElement = screen.getElementByTestId("reservation");
    expect(reservationElement).toBeInTheDocument();
})

test('Reservation form test', () => {
    render(<ReservationForm/>);
    const reservationElement = screen.getElementByTestId("reservation");
    const button = screen.getElementByTestId("submitbutton");
    fireEvent.click(button);
    expect(reservationElement.not.toHaveTextContext("Success!"));
})