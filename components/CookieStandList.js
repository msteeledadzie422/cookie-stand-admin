import { hours } from '../data';

const CookieStandList = ({ cookieStandList }) => {
  const generateSalesPerHour = (cookieStand) => {
    const { minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale } = cookieStand;
    const salesPerHour = [];

    for (let i = 0; i < hours.length; i++) {
      const randomCustomers = Math.floor(
        Math.random() * (maxCustomersPerHour - minCustomersPerHour + 1) + minCustomersPerHour
      );
      const cookiesSold = Math.round(randomCustomers * avgCookiesPerSale);
      salesPerHour.push(cookiesSold);
    }

    return salesPerHour;
  };

  if (cookieStandList.length == 0) {
    return <p>No Cookie Stands Available</p>
  }

  const totalSalesPerHour = hours.map((hour, index) => {
    let total = 0;
    for (const cookieStand of cookieStandList) {
      total += generateSalesPerHour(cookieStand)[index];
    }
    return total;
  });

  const totalSalesPerLocation = cookieStandList.map((cookieStand) => {
    let total = 0;
    const salesPerHour = generateSalesPerHour(cookieStand);
    for (const sales of salesPerHour) {
      total += sales;
    }
    return total;
  });

  const totalSalesOverall = totalSalesPerLocation.reduce((total, sales) => total + sales, 0);

  return (
    <div style={{ width: '80%' }}>
      <table
        style={{
          backgroundColor: '#B3E5BE',
          padding: '1rem',
          borderRadius: '0.5rem',
          marginBottom: '1rem',
          width: '100%',
          borderCollapse: 'collapse', // Add border collapse style
        }}
      >
        <thead>
          <tr>
            <th style={{ border: '1px solid black' }}>Location</th>
            {hours.map((hour) => (
              <th key={hour} style={{ border: '1px solid black' }}>
                {hour}
              </th>
            ))}
            <th style={{ border: '1px solid black' }}>Totals</th>
          </tr>
        </thead>
        <tbody>
          {cookieStandList.map((cookieStand, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black' }}>{cookieStand.location}</td>
              {generateSalesPerHour(cookieStand).map((sales, index) => (
                <td key={index} style={{ border: '1px solid black' }}>
                  {sales}
                </td>
              ))}
              <td style={{ border: '1px solid black' }}>{totalSalesPerLocation[index]}</td>
            </tr>
          ))}
          <tr>
            <td style={{ border: '1px solid black', fontWeight: 'bold' }}>Totals</td>
            {totalSalesPerHour.map((total, index) => (
              <td key={index} style={{ border: '1px solid black', fontWeight: 'bold' }}>
                {total}
              </td>
            ))}
            <td style={{ border: '1px solid black', fontWeight: 'bold' }}>{totalSalesOverall}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CookieStandList;