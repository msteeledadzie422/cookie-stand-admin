import React, { useState } from 'react';

const CreateForm = ({ onCookieStandCreate }) => {
  const [location, setLocation] = useState('');
  const [minCustomersPerHour, setMinCustomersPerHour] = useState('');
  const [maxCustomersPerHour, setMaxCustomersPerHour] = useState('');
  const [avgCookiesPerSale, setAvgCookiesPerSale] = useState('');

    // Functionality moved from main page to handle the event here.
    function handleSubmit(event) {
        event.preventDefault();

        const cookieStand = {
            location,
            minimum_customers_per_hour: parseFloat(minCustomersPerHour),
            maximum_customers_per_hour: parseFloat(maxCustomersPerHour),
            average_cookies_per_sale: parseFloat(avgCookiesPerSale),
        };

        onCookieStandCreate(cookieStand);

        // Reset form fields
        setLocation('');
        setMinCustomersPerHour('');
        setMaxCustomersPerHour('');
        setAvgCookiesPerSale('');
    }
    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '3rem', marginBottom: '2' +
                'rem', width: '80%' }}>
          <div
            style={{
              backgroundColor: '#B3E5BE',
              padding: '1rem',
              borderRadius: '0.5rem',
              marginBottom: '1rem',
            }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <h1 style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '0.5rem', fontSize: '2rem' }}>Create Cookie Stand</h1>
              <div style={{ display: 'flex' }}>
                <label htmlFor="location" style={{ fontWeight: 'bold', flex: '1', display: 'flex', alignItems: 'center' }}>
                  Location
                  <input
                    id="location"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    style={{ marginLeft: '0.5rem', width: '100%' }}
                  />
                </label>
              </div>
            </div>
            <div style={{ display: 'flex', marginBottom: '1rem' }}>
              <label htmlFor="minCustomersPerHour" style={{ fontWeight: 'bold', flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                Minimum Customers per Hour
                <input
                  id="minCustomersPerHour"
                  name="minCustomersPerHour"
                  value={minCustomersPerHour}
                  onChange={(e) => setMinCustomersPerHour(e.target.value)}
                  style={{ marginLeft: '0.5rem', width: 'calc(100% - 5rem)' }}
                />
              </label>
              <label htmlFor="maxCustomersPerHour" style={{ fontWeight: 'bold', flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                Maximum Customers per Hour
                <input
                  id="maxCustomersPerHour"
                  name="maxCustomersPerHour"
                  value={maxCustomersPerHour}
                  onChange={(e) => setMaxCustomersPerHour(e.target.value)}
                  style={{ marginLeft: '0.5rem', width: 'calc(100% - 5rem)' }}
                />
              </label>
              <label htmlFor="avgCookiesPerSale" style={{ fontWeight: 'bold', flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                Average Cookies per Sale
                <input
                  id="avgCookiesPerSale"
                  name="avgCookiesPerSale"
                  value={avgCookiesPerSale}
                  onChange={(e) => setAvgCookiesPerSale(e.target.value)}
                  style={{ marginLeft: '0.5rem', width: 'calc(100% - 5rem)' }}
                />
              </label>
              <button
                type="submit"
                style={{ backgroundColor: '#379237', color: 'black', padding: '0.5rem', borderRadius: '0.25rem' }}
                >
                Create
              </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            </div>
          </div>
        </form>
    );
}

export default CreateForm;
