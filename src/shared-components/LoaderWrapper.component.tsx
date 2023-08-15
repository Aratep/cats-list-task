// SHARED COMPONENTS
import { LoaderIndicator } from "./loader-indicator/LoaderIndicator.component";

export const LoaderWrapper = ({
  children,
  isLoading,
}: {
  children: any;
  isLoading: boolean;
}) => (isLoading ? <LoaderIndicator /> : children);
