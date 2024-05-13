import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { GoArrowLeft } from "react-icons/go";

type PropsType = {
  children: React.ReactNode;
  addBtn?: boolean;
  title?: string;
  buttonLabel?: string;
  path?: string;
  subtitle?: string;
  showGoBack?: boolean;
  modalButton?: React.ReactNode;
};

const CrudHeaderLayout = ({
  children,
  addBtn,
  title,
  buttonLabel,
  path,
  subtitle,
  showGoBack,
  modalButton,
}: PropsType) => {
  const navigate = useNavigate();
  if (addBtn) {
    if (path === undefined) {
      throw new Error("Button cannot be used without path");
    }
    if (buttonLabel === undefined) {
      throw new Error("Button cannot be used without buttonLabel");
    }
  }

  return (
    <div className="h-full">
      {showGoBack && (
        <Button variant="link" onClick={() => navigate(-1)} className="p-0">
          <GoArrowLeft className="mr-2" />
          <span>Go back</span>
        </Button>
      )}

      <div className="flex items-center gap-x-3">
        {title && (
          <div className="flex gap-x-4 items-center mb-4">
            <h1 className="page__title">{title}</h1>
            {addBtn && (
              <Link to={path || "/overview"}>
                <Button
                  className="border-primary text-primary hover:text-primary hover:bg-slate-100"
                  variant="outline"
                >
                  {buttonLabel}
                </Button>
              </Link>
            )}
            {modalButton}
          </div>
        )}
      </div>

      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}

      {children}
    </div>
  );
};

export default CrudHeaderLayout;
