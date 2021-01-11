import * as React from "react";
import { useRouteMatch } from "react-router-dom";
import { getInvoiceByOrderId } from "../../api/invoice";
import { LayoutOne, Text, Table } from "upkit";
import TopBar from "../../components/TopBar";
import BounceLoader from "react-spinners/BounceLoader";
import { formatRupiah } from "../../utils/format-rupiah";
import { config } from "../../config";
import StatusLabel from "../../components/StatusLabel";

export default function Invoice() {
  let { params } = useRouteMatch();
  let [invoice, setInvoice] = React.useState(null);
  let [error, setError] = React.useState("");
  let [status, setStatus] = React.useState("process");

  React.useEffect(() => {
    getInvoiceByOrderId(params?.order_id)
      .then(({ data }) => {
        if (data?.error) {
          setError(data.message || "Terjadi Kesalahan yang tidak di ketahui");
        }
        setInvoice(data);
      })
      .finally(() => setStatus("idle"));
  }, [params]);
  if (error.length) {
    return (
      <LayoutOne>
        <TopBar />
        <Text as="a3">Terjadi Keasalahan</Text>
        {error}
      </LayoutOne>
    );
  }
  if (status === "process") {
    return (
      <LayoutOne>
        <div className="text-center py-10">
          <div className="inline-block">
            <BounceLoader color="red" />
          </div>
        </div>
      </LayoutOne>
    );
  }
  return (
    <LayoutOne>
      <TopBar />
      <Text as="3"> Invoice </Text>
      <br />

      <Table
        showPagination={false}
        items={[
          {
            label: "status",
            value: <StatusLabel status={invoice?.payment_status} />,
          },
          {
            label: "Order ID",
            value: "#" + invoice?.order?.order_number,
          },
          {
            label: "Total amount",
            value: formatRupiah(invoice?.total),
          },
          {
            label: "Billed to",
            value: (
              <div>
                <b>{invoice?.user?.full_name} </b> <br />
                {invoice?.user?.email} <br /> <br />
                {invoice?.delivery_address?.detail} <br />
                {invoice?.delivery_address?.kelurahan},
                {invoice?.delivery_address?.kecamatan} <br />
                {invoice?.delivery_address?.kabupaten} <br />
                {invoice?.delivery_address?.provinsi}
              </div>
            ),
          },
          {
            label: "Payment to",
            value: (
              <div>
                {config.owner} <br />
                {config.contact} <br />
                {config.billing.account_no} <br />
                {config.billing.bank_name}
              </div>
            ),
          },
        ]}
        columns={[
          { Header: "Invoice", accessor: "label" },
          { Header: "", accessor: "value" },
        ]}
      />
    </LayoutOne>
  );
}
