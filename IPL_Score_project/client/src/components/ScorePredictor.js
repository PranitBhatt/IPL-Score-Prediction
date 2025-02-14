import React from 'react'

export default function ScorePredictor() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
      };
    
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
          <div className="border-2 border border-white p-8 w-1/2">
            <legend className="text-white text-center text-2xl font-bold mb-6">Predict Score Here!</legend>
            <form onSubmit={handleSubmit} className="space-y-4">
              <select className="form-select block w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white">
                <option value="none">--- Select a Batting team ---</option>
                <option value="Mumbai Indians">Mumbai Indians</option>
                <option value="Kolkata Knight Riders">Kolkata Knight Riders</option>
                <option value="Chennai Super Kings">Chennai Super Kings</option>
                <option value="Rajasthan Royals">Rajasthan Royals</option>
                <option value="Kings XI Punjab">Kings XI Punjab</option>
                <option value="Royal Challengers Bangalore">Royal Challengers Bangalore</option>
                <option value="Delhi Daredevils">Delhi Daredevils</option>
                <option value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
              </select>
    
              <select className="form-select block w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white">
                <option value="none">--- Select a Bowling team ---</option>
                <option value="Mumbai Indians">Mumbai Indians</option>
                <option value="Kolkata Knight Riders">Kolkata Knight Riders</option>
                <option value="Chennai Super Kings">Chennai Super Kings</option>
                <option value="Rajasthan Royals">Rajasthan Royals</option>
                <option value="Kings XI Punjab">Kings XI Punjab</option>
                <option value="Royal Challengers Bangalore">Royal Challengers Bangalore</option>
                <option value="Delhi Daredevils">Delhi Daredevils</option>
                <option value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
              </select>
    
              <input
                type="number"
                name="overs"
                placeholder="Overs (>= 5.0) eg. 7.2"
                className="form-input block w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white"
              />
    
              <input
                type="number"
                name="runs"
                placeholder="Runs eg. 64"
                className="form-input block w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white"
              />
    
              <input
                type="number"
                name="wickets"
                placeholder="Wickets eg. 4"
                className="form-input block w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white"
              />
    
              <input
                type="number"
                name="runs_in_prev_5"
                placeholder="Runs scored in previous 5 Overs eg. 42"
                className="form-input block w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white"
              />
    
              <input
                type="number"
                name="wickets_in_prev_5"
                placeholder="Wickets taken in previous 5 Overs eg. 3"
                className="form-input block w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white"
              />
    
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                style={{ marginLeft: '40%' }}
              >
                Predict Score
              </button>
            </form>
          </div>
        </div>
      );
    };
