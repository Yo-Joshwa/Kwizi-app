import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { formatTime } from "../../utils/formatTime";
import CategoryBarChart from "./CategoryBarChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpellCheck, faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import Timeline from "../../assets/categories/image--timeline.svg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import axios from "axios";

function UserStats() {
  const { user, isLoaded } = useUser();
  const [userStats, setUserStats] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log("user.id", user?.id);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/user/${user.id}/stats`
        );
        setUserStats(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (isLoaded && user) fetchStats();
  }, [isLoaded, user]);

  if (isLoaded && !user) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-xl text-red-500 font-semibold">
        Please login to view your stats.
      </div>
    );
  }
  // if (loading || !userStats) return <Loader />;

  const recentAttemptDate = userStats?.categoryStats.reduce((acc, curr) => {
    const currentDate = new Date(curr.lastAttempt);
    return currentDate > acc ? currentDate : acc;
  }, new Date(0));

  const totalAttempts = userStats?.categoryStats.reduce(
    (acc, curr) => acc + curr.attempts,
    0
  );

  const totalCompleted = userStats?.categoryStats.reduce(
    (acc, curr) => acc + curr.completed,
    0
  );

  const latestStats = userStats?.categoryStats
    .slice(-2)
    .sort((a, b) => new Date(b.lastAttempt) - new Date(a.lastAttempt));

  return (
    <div className="flex flex-col gap-4">
      <div className="w-[63%] h-1/2 ml-[20%] mb-[1%] mt-[1%] p-[10px] rounded-[8px] shadow-md">
        <img
          src={Timeline}
          className="card-img-top w-[20%] ml-[40%]"
          alt="Timeline"
        />
      </div>

      <div className="ml-[20%]">
        <h1 className="font-bold text-2xl">Overview</h1>
        <p className="text-gray-400">
          A summary of your recent activity and performance
        </p>
      </div>
      <div className="w-[63%] h-1/2 ml-[20%] mb-[1%] mt-[1%]  border-1 p-[10px] rounded-[8px] shadow-md">
        <div className="py-4 px-4 mb-2 flex flex-col gap-1 border-1  rounded-lg shadow">
          <h2 className="font-bold text-xl">{user?.firstName}</h2>
          <p className="text-gray-400 font-semibold">Recent Attempt</p>
          <p className="text-sm text-gray-400 font-semibold">
            {formatTime(recentAttemptDate)}
          </p>
        </div>

        <div className="py-4 px-4 mb-2 flex gap-2 border-1 rounded-lg shadow">
          <div className="text-xl font-bold text-black-400 ">
            {<FontAwesomeIcon icon={faCrosshairs} />} Total Attempts:
          </div>
          <p className="font-bold text-2xl">{totalAttempts}</p>
        </div>

        <div className="py-4 px-4 flex gap-2 border-1 rounded-lg shadow">
          <div className="text-xl font-bold text-black-400 ">
            {<FontAwesomeIcon icon={faSpellCheck} />} Total Completed:
          </div>
          <p className=" font-bold text-2xl">{totalCompleted}</p>
        </div>
      </div>

      <div className="ml-[20%] mr-[17%] mt-2 grid grid-cols-2 gap-6">
        {latestStats?.map((category) => (
          <CategoryBarChart key={category.id} categoryData={category} />
        ))}
      </div>
      <div className="ml-[20%] ">
        <h1 className="font-bold text-2xl">Detailed Category Stats</h1>
        <p className="text-muted-foreground">
          Breakdown of performance by category
        </p>
      </div>

      <div className="ml-[20%] mr-[17%] border-1 rounded-lg shadow">
        <Table>
          <TableHeader className="text-base font-semibold">
            <TableRow>
              <TableHead className="py-4">Category</TableHead>
              <TableHead>Attempts</TableHead>
              <TableHead>Completed</TableHead>
              <TableHead>Average Score</TableHead>
              <TableHead>Last Attempt</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userStats?.categoryStats.map((category) => (
              <TableRow key={category.id}>
                <TableCell className="font-semibold py-4">
                  {category.category.name}
                </TableCell>
                <TableCell>{category.attempts}</TableCell>
                <TableCell>{category.completed}</TableCell>
                <TableCell>
                  {category.averageScore !== null
                    ? category.averageScore.toFixed(2)
                    : "N/A"}
                </TableCell>
                <TableCell>{formatTime(category.lastAttempt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default UserStats;
