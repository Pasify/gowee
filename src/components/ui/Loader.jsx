import { Leapfrog, Metronome } from "ldrs/react";
import "ldrs/react/Leapfrog.css";

function Loader() {
  return <Leapfrog size="29" speed="1.5" color="black" />;
}
function Loader2() {
  return <Metronome size="29" speed="1.5" color="black" />;
}

export { Loader, Loader2 };
