const partitionA = window.jancy.partitions.find(p => p.id === a.partitionId);
const partitionB = window.jancy.partitions.find(p => p.id === b.partitionId);

const free1A = parseInt(partitionA.profile?.free1, 10);
const free1B = parseInt(partitionB.profile?.free1, 10);

const isFree1AValid = !isNaN(free1A);
const isFree1BValid = !isNaN(free1B);

if (isFree1AValid && isFree1BValid) {
    return free1A - free1B;
}

if (isFree1AValid) return -1;
if (isFree1BValid) return 1;

if (partitionA.profile?.email && partitionB.profile?.email) {
    return partitionA.profile.email.localeCompare(partitionB.profile.email);
}

if (partitionA.profile && !partitionB.profile) return -1;
if (partitionB.profile && !partitionA.profile) return 1;
return 0;
